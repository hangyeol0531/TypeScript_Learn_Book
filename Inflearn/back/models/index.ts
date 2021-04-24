import User, {associate as associateUser } from './user'
import Image, {associate as associateImage } from './image'
import Post, {associate as associatePost } from './post'
import Hashtag, {associate as associatehashtag } from './hastag'
import Comment, {associate as associateUserComment } from './comment'

export * from './sequelize'

const db = {
  User,
  Comment,
  Hashtag,
  Image,
  Post,
};

export type dbType = typeof db

associateUser(db);
associateImage(db);
associatePost(db);
associatehashtag(db);
associateUserComment(db);

// sequelize -> user -> index