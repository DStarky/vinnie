import { useState } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import styles from './Order.module.scss';

type FormValues = {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	adress: string;
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

			<form
				onSubmit={handleSubmit(onSubmit)}
				className={styles.form}>
				<div className={styles.block}>
					<label
						className={styles.label}
						htmlFor='firstName'>
						Имя*:{' '}
					</label>
					<input
						className={styles.input}
						{...register('firstName', {
							required: 'Введите имя',
						})}
						id='firstName'
					/>
					{errors?.firstName && <p className={styles.error}>{errors?.firstName?.message || 'Error!'}</p>}
				</div>

				<div className={styles.block}>
					<label
						className={styles.label}
						htmlFor='lastName'>
						Фамилия:{' '}
					</label>
					<input
						className={styles.input}
						{...register('lastName')}
						id='lastName'
					/>
					{errors?.lastName && <p className={styles.error}>{errors?.lastName?.message || 'Error!'}</p>}
				</div>

				<div className={styles.block}>
					<label
						className={styles.label}
						htmlFor='phone'>
						Мобильный телефон*:{' '}
					</label>
					<input
						className={styles.input}
						{...register('phone', {
							required: 'Введите мобильный телефон',
							minLength: {
								message: 'Минимум 9 цифр',
								value: 9,
							},
						})}
						id='phone'
					/>
					{errors?.phone && <p className={styles.error}>{errors?.phone?.message || 'Error!'}</p>}
				</div>

				<div className={styles.block}>
					<label
						className={styles.label}
						htmlFor='email'>
						Email:{' '}
					</label>
					<input
						className={styles.input}
						{...register('email')}
						id='email'
					/>
					{errors?.email && <p className={styles.error}>{errors?.email?.message || 'Error!'}</p>}
				</div>

				<div className={styles.block}>
					<label
						className={styles.label}
						htmlFor='adress'>
						Адрес*:{' '}
					</label>
					<input
						className={styles.input}
						{...register('adress', {
							required: 'Введите адрес',
						})}
						id='adress'
					/>
					{errors?.adress && <p className={styles.error}>{errors?.adress?.message || 'Error!'}</p>}
				</div>

				<input
					type='submit'
					value='Оформить заказ'
					disabled={!isValid}
					className={styles.button}
				/>
			</form>

			<p className={styles.small}>* - обязательные поля для заполнения</p>
		</div>
	);
};
export default Order;
