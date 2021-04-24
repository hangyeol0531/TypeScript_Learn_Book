import {DataTypes, Model} from 'sequelize'
import {dbType} from './index'
import {sequelize} from './sequelize'

class Hashtag extends Model{
    public readonly id! : number;
    public name! : number;
    public readonly createAt! : Date;
    public readonly updateAt! : Date;
} 

Hashtag.init({
    name : {
        type: DataTypes.STRING(200),
        allowNull : false,
    },
}, {
    sequelize,
    modelName : 'Hashtag',
    tableName : 'hasgtag',
    charset : 'utf8mb4', 
    collate : 'utf8mb4_general_ci'
});

export const associate = (db : dbType) =>{

};

export default Hashtag;