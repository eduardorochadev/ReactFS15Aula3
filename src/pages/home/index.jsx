import React from "react";

const Home = () => {
    const [contador, setContador] = React.useState(0);

    const [darkMode, setDarkMode] = React.useState(false);

    const decrementar = () => {
        setContador(contador - 1);
    }
    
    React.useEffect(() => {
        console.log('useEffect foi chamado')
    }, [darkMode])

    return(
        <>
            <div className={darkMode ? 'centro dark' : 'centro'}>
                <button onClick={() => setContador (contador + 1)}>Incrementar</button>
                <h1>Contagem: {contador}</h1>
                <button onClick={decrementar}>Decrementar</button>
            </div>
            <div onClick={() => setDarkMode(!darkMode)} className={"switch"}>
                {darkMode ? 'Acender a luz' : 'Apagar a luz'}
            </div>
        </>
    )
}

export default Home;