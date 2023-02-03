
const Thought = (props) =>{
    const style = {
        textAlign: 'center',
        fontSize: '20px',
        color: 'white',
    }

    return (
        <div>
            <li style={style}> {props.content}  ▶ {props.time} </li>
            <button onClick={props.clickHandle}> Delete </button>
        </div>
    );
};

export default Thought;