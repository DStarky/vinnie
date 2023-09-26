import { useState } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import styles from './Order.module.scss';

type FormValues = {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
};

const Order: React.FC = () => {
	const [userData, setUserData] = useState({});

	const setValues = (values: {}) => {
		setUserData(prevData => ({
			...prevData,
			...values,
		}));
	};

	const {
		register,
		formState: { errors, isValid },
		handleSubmit,
		reset,
		control,
	} = useForm<FormValues>({ mode: 'onBlur' });

	const onSubmit: SubmitHandler<FormValues> = (data: any) => {
		alert(JSON.stringify(data));
		reset();
	};

	return (
		<div className={styles.root}>
			<h2>Оформить заказ</h2>
			
      <form onSubmit={handleSubmit(onSubmit)}>

				<label htmlFor='firstName'>Имя*: </label>
				<input
					{...register('firstName', {
            required: "Введите имя"
          })}
					id='firstName'
				/>

				{errors?.firstName && <p>{errors?.firstName?.message || 'Error!'}</p>}

				<input
					type='submit'
					value='Оформить заказ'
					disabled={!isValid}
				/>
			</form>
		</div>
	);
};
export default Order;
