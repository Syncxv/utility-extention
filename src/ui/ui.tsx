import { render } from 'preact'
import { useState } from 'preact/hooks'
import { useEffect } from 'react'
import styled from 'styled-components'
import settings from '../managers/settings'
// import { Switch } from './components/Switch'

const Flex = styled.div<{ gap?: number }>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${props => props.gap || 0}rem;
`

const App = () => {
    const [features, setFeatures] = useState([])
    const [disabledFeatures, setDisabledFeatures] = useState([])
    useEffect(() => {
        const initalize = async () => {
            setFeatures(await settings.get('features', []))
            setDisabledFeatures(await settings.get('disabledFeatures', []))
        }
        initalize()
    }, [])
    return (
        <>
            {features.map(featureName => (
                <Flex gap={0.5}>
                    {/* <Switch
                        onChange={() => {
                            console.log('hi')
                        }}
                        checked={!disabledFeatures.includes(featureName)}
                        label={featureName}
                    /> */}
                    <div>{featureName}</div>
                    <input
                        onChange={e => {
                            const type = e.target.checked ? 'enable' : 'disable'
                            chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
                                chrome.tabs.sendMessage(tabs[0].id!, { type, feature: featureName }, data =>
                                    console.log('data:', data)
                                )
                            })
                        }}
                        type="checkbox"
                        checked={!disabledFeatures.includes(featureName)}
                    />
                </Flex>
            ))}
        </>
    )
}

render(<App />, document.body)
