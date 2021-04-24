import {DataTypes, Model} from 'sequelize'
import {dbType} from './index'
import {sequelize} from './sequelize'

class Comment extends Model{
    public readonly id! : number;
    public content! : number;
    public readonly createAt! : Date;
    public readonly updateAt! : Date;
} 

Comment.init({
    content : {
        type: DataTypes.TEXT,
        allowNull : false,
    },
}, {
    sequelize,
    modelName : 'Comment',
    tableName : 'comment',
    charset : 'utf8mb4', 
    collate : 'utf8mb4_general_ci'
});

export const associate = (db : dbType) =>{

};

export default Comment;