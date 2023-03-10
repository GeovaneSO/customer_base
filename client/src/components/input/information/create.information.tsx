import { useEffect } from "react";
import { BsExclamationCircle } from "react-icons/bs"
import { MatrixContext } from "../../../contexts/matrix.context";
import { PropsInputInformation } from '../../../interfaces/component.interface'
import { ContainerInput } from '../style'

const InputInformation = ({
	register,
	reset,
	isSubmitSuccessful,
	label,
	errors,
	children,
	id,
	type,
	name,
	placeholder,
}: PropsInputInformation) => {
	const { successful, setSuccessful } = MatrixContext()

	useEffect(() => {
		if (isSubmitSuccessful) {
			setSuccessful(!successful)
			reset({
				email: '', 
				phone: ''
			});
		}
	}, [, successful, reset]);
	
	return (
		<>

			<ContainerInput>
				<div className="box_input_error">
					<div className="box_label_error">

						<label htmlFor={name}>{label}</label>

						{

							errors && (
								errors[name!]?.type === 'required' ||
								errors[name!]?.type === 'matches' ||
								errors[name!]?.type === 'max' ||
								errors[name!]?.type === 'min') ? (
								<div className="dropdown">
									<BsExclamationCircle className="svg" />
									<div className="dropdown-content">
										<p>{errors[name!]?.message}</p>
									</div>

								</div>
							) : null
						}
					</div>
					<input
						{...register!(name!)}
						type={type}
						name={name}
						id={id}
						placeholder={placeholder}
					/>
				</div>

			</ContainerInput>
		</>
	)
}

export { InputInformation }

