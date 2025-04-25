    import { toast, ToastOptions } from "react-toastify";

    const toastConfig: ToastOptions = {
    position: "top-right",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
    style: {
        borderRadius: "10px",
        fontWeight: "bold",
        fontSize: "0.9rem",
        color: "#fff",
    },
    };

    export function ToastAlerta(mensagem: string, tipo: string) {
    switch (tipo) {
        case "sucesso":
        toast.success(mensagem, {
            ...toastConfig,
            style: { ...toastConfig.style, background: "#28A745" }, // Verdinho pra sucesso
        });
        break;

        case "erro":
        toast.error(mensagem, {
            ...toastConfig,
            style: { ...toastConfig.style, background: "#DC3545" }, // Vermelhinho pra erro
        });
        break;

        case "warn":
        toast.warn(mensagem, {
            ...toastConfig,
            style: { ...toastConfig.style, background: "#FF8000" }, // Laranjinha pra aviso
        });
        break;

        case "info":
        default:
        toast.info(mensagem, {
            ...toastConfig,
            style: { ...toastConfig.style, background: "#0061FF" }, // Azulzinho para informação
        });
        break;
    }
    }
