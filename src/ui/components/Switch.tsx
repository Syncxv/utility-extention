import styled from 'styled-components'

const SwitchContainer = styled.div`
    position: relative;
    width: 75px;
    display: inline-block;
    vertical-align: middle;
`

export const Switch: React.FC<{ onChange: () => void; checked: boolean; label: string }> = ({
    onChange,
    checked,
    label
}) => {
    return (
        <SwitchContainer className="toggle-switch">
            <input
                style={{ display: 'none' }}
                onChange={onChange}
                type="checkbox"
                className="toggle-switch-checkbox"
                name="toggleSwitch"
                id="toggleSwitch"
                checked={checked}
            />
            <label className="toggle-switch-label">{label}</label>
        </SwitchContainer>
    )
}
