import React from 'react';
import s from "./Objects.module.css";

function importAll(r) {
    return r.keys().map(r);
}

const imgObj = importAll(require.context('./assets/imgObj', false, /\.(png|jpe?g|svg)$/));


const Image = () => {
    const randomObj = imgObj[Math.floor(Math.random() * imgObj.length)];
    const randomDeg = Math.floor(Math.random() * 360);
    const randomWidth = Math.floor(Math.random() * 100) + 50;
    return <img className={s.Image}
                src={randomObj.default}
                alt="img"
                style={{
                    transform: `rotate(${randomDeg}deg)`,
                    width: `${randomWidth}px`
                }}/>
}


const Objects = (props) => {
    let objForMap = Array(parseInt(props.countObj) | 0).fill(1).map((e, index) => index + 1)
    console.log('props', props, objForMap)
    return (
        <div>
            <div className={s.Images}>
                {objForMap.map(() => {
                    return <Image/>
                })
                }


            </div>
        </div>
    );
};

export default React.memo(Objects);
