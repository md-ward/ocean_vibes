import useDialogStore from "../controllers/useDialogStore";

const ContentDialog = () => {
    const { isOpen, content } = useDialogStore();

    return (
        <div style={{ display: content ? 'block' : 'none' }}
            className={`absolute z-40 w-full h-full bg-gray-100 ` }
        >
            <div
                className={`transition-transform ${isOpen ? "translate-y-0" : "translate-y-full"
                    } duration-500 ease-in-out`}
            >
                {content}
            </div>
        </div>
    );
};

export default ContentDialog;