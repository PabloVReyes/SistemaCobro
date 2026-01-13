import {
    Anchor,
    Button,
    Paper,
    PasswordInput,
    Text,
    TextInput,
    Title,
} from '@mantine/core';
import classes from './styles.module.css';
import { useForm } from '@mantine/form';
import { useAuthStore } from '../../store/store';
import { notify } from '../../../utils';

export function Login() {
    const { login, isLoading } = useAuthStore()
    const form = useForm({
        initialValues: {
            username: null,
            password: null,
        },
        validate: {
            username: (value) => !value ? "Ingresa tu usuario" : null,
            password: (value) => !value ? "Introduce tu contraseña" : null
        }
    })

    const handleSubmit = async (values: typeof form.values) => {
        console.log(values)
        try {
            await login(values)
        } catch (error: any) {
            notify({
                type: "error",
                title: "Error al iniciar sesion",
                message: error.message
            })
        }
    }

    return (
        <form onSubmit={form.onSubmit(handleSubmit)}>
            <div className={classes.wrapper}>
                <Paper className={classes.form}>
                    <Title order={2} className={classes.title}>
                        Sistema de cobros
                    </Title>

                    <TextInput
                        label="Usuario"
                        placeholder="Your user"
                        size="md"
                        radius="md"
                        {...form.getInputProps("username")}
                    />
                    <PasswordInput
                        label="Contraseña"
                        placeholder="Your password"
                        mt="md" size="md"
                        radius="md"
                        {...form.getInputProps("password")}
                    />
                    <Button
                        fullWidth
                        mt="xl"
                        size="md"
                        radius="md"
                        type="submit"
                        loading={isLoading}
                    >
                        Iniciar sesion
                    </Button>

                    <Text ta="center" mt="md">
                        No tienes cuenta{' '}
                        <Anchor href="#" fw={500} onClick={(event) => event.preventDefault()}>
                            Registrar
                        </Anchor>
                    </Text>
                </Paper>
            </div>
        </form>
    );
}