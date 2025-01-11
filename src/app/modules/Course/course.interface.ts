import { Schema } from 'mongoose';

export type TPreRequisiteCourses = {
  course: Schema.Types.ObjectId;
  isDeleted: boolean;
};

export type TCourse = {
  title: string;
  prefix: string;
  code: number;
  credits: number;
  preRequisiteCourses: [];
  isDeleted: boolean;
};
