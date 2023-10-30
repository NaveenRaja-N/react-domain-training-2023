import style from './UserCard.module.css';
import Image from '../Image/Image';
import Tag from '../Tag/Tag';

export default function UserCard({ data }) {
    return (
        <div className={style.usercardContainer}>
            <div>
                <Image alt={data.name} src={data.picture} />
            </div>
            <div className={style.titleContainer}>
                <h2>{data.name}</h2>
                <h3>{data.place}</h3>
                <Tag tags={data.tags} />
            </div>
        </div>
    );
}