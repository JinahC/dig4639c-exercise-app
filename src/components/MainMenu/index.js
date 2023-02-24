export default function MainMenu(props) {
    return (
        <div>
            <header>
                <h1 className="main-menu--title">EXERCISES</h1>
            </header>
            <div className="main-menu--btn-group">
                <button className="main-menu--btn" onClick={props.activatePushups}>
                    <img src={props.pushupImg} alt="" />
                    <h2>pushups</h2>
                </button>
                <button className="main-menu--btn" onClick={props.activatePlanks}>
                    <img src={props.plankImg} alt="" />
                    <h2>planks</h2>
                </button>
                <button className="main-menu--btn" onClick={props.activateRunning}>
                    <img src={props.runningImg} alt="" />
                    <h2>running</h2>
                </button>
            </div>
        </div>
    )
}