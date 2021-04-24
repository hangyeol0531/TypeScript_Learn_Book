import {Model, DataTypes} from 'sequelize';
import {dbType} from './index'
import {sequelize} from './sequelize'

class User extends Model{
    public readonly id! : number;
    public nickname! : string;
    public UserId! : string;
    public password! : string;
    public readonly createAt! : Date;
    public readonly updateAt! : Date;
}

User.init({
    nickname : {
        type: DataTypes.STRING(20),
    },
    userId : {
        type : DataTypes.STRING(20),
        allowNull : false,
        unique : true,
    },
    password :{
        type : DataTypes.STRING(100),
        allowNull : false,
    }
}, {
    sequelize,
    modelName : 'User',
    tableName : 'user',
    charset : 'utf8',
    collate : 'utf8_general_ci'
})

export const associate = (db : dbType) =>{

}

export default User