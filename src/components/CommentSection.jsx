import { commentSchema } from "../schemas";
import React, { useState } from "react";
import Button from "./Button";
import { Formik, Form, Field } from "formik";
import MainCommentSchema from "../schemas/CommentSectionSchema";
import SubCommentSchema from "../schemas/SubCommentSchema";
const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const onSubmit = async (values, actions) => {
    console.log(values);
    // Add the new comment to the comments array
    setComments([...comments, values.comment]);
    // Reset the form
    actions.resetForm();
  };
  return (
    <div>
      <Formik
        initialValues={{ comment: "" }}
        validationSchema={commentSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <MainCommentSchema
              label=""
              name="comment"
              type="text"
              placeholder="Your Comment"
            />

            <Button
              disabled={isSubmitting}
              type="submit"
              classname="postButtonMain"
            >
              Post
            </Button>
          </Form>
        )}
      </Formik>
      <div>
        {comments.map((comment, index) => (
          <div key={index}>
            <div>
            {comment}
            <Formik
        initialValues={{ comment: "" }}
        validationSchema={commentSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <SubCommentSchema
              label=""
              name="comment"
              type="text"
              placeholder="Reply"
            />

            <Button
              disabled={isSubmitting}
              type="submit"
              classname="replyButton"
            >
            Reply
            </Button>
          </Form>
        )}
      </Formik>
            </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
