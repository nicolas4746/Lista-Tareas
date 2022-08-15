import React from "react";

function withStorageListener(WrappedComponent) {
    return function WrappedComponentWithStorageListener(props) {
        const [storageListener, setStorageListener] = React.useState(false);

        window.addEventListener("storage", (change) => {
            if(change.key === 'TODOS_V1'){
                console.log('Hubo cambios en TODOS_V1');
                setStorageListener(true);
            }
        })

        const toggleShow = () => {
            props.sincronize();
            setStorageListener(false);
        }

        return (
            <WrappedComponent
                show={storageListener}
                toggleShow={toggleShow}
            />
        );
    }
}
export { withStorageListener };