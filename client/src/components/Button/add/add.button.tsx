import { PropsButton } from '../../../interfaces/component.interface'
import { ContainerButton } from './style'

const ButtonAdd = ({ children, id, type, onClick, className }: PropsButton) => {
	return (
		<ContainerButton
			
		>
			<button id={id} className={className} type={type} onClick={onClick}>
				{children}
			</button>
		</ContainerButton>
	)
}

export default ButtonAdd
