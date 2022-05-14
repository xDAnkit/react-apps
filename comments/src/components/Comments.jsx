import { useState } from "react";
import { Card, Button } from "react-bootstrap";

const Comments = ({ comments }) => {
  const [expand, setExpand] = useState(false);
  const [reply, setReply] = useState(false);
  const [commentText, setCommentText] = useState({});
  const addComment = () => {
    setReply(!reply);
  };
  const addReply = () => {
    comments?.children?.push(commentText);
    console.log("line13", comments);
  };
  if (comments?.children?.length === 0)
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Header>{comments.author}</Card.Header>
        <Card.Body>
          <Card.Text>{comments?.comment_text}</Card.Text>

          <Button
            variant="primary"
            onClick={(e) => {
              e.stopPropagation();
              addComment();
            }}
          >
            reply
          </Button>
          {reply ? (
            <>
              <input
                type="text"
                value={commentText.comment_text}
                onChange={(e) => {
                  e.stopPropagation();
                  setCommentText({
                    comment_text: e.target.value,
                    children: [],
                  });
                }}
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  addReply();
                }}
              >
                add comment
              </button>
            </>
          ) : (
            <></>
          )}
        </Card.Body>
      </Card>
    );
  else {
    return (
      <div>
        <span
          onClick={(e) => {
            setExpand(!expand);
          }}
        >
          {console.log(expand)}
          <Card style={{ width: "18rem" }}>
            <Card.Header>{comments?.author}</Card.Header>
            <Card.Body>
              <Card.Text>{comments?.comment_text}</Card.Text>

              <Button
                variant="primary"
                onClick={(e) => {
                  e.stopPropagation();
                  addComment();
                }}
              >
                reply
              </Button>
              {reply ? (
                <>
                  <input
                    type="text"
                    value={commentText.comment_text}
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    onChange={(e) => {
                      e.stopPropagation();
                      setCommentText({
                        comment_text: e.target.value,
                        children: [],
                      });
                    }}
                  />
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      addReply();
                    }}
                  >
                    add comment
                  </button>
                </>
              ) : (
                <></>
              )}
            </Card.Body>
          </Card>
        </span>
        <span style={{ display: expand ? "block" : "none", padding: "20px" }}>
          {comments?.children?.map((comment) => {
            {
              console.log(comment);
            }
            return <Comments comments={comment} />;
          })}
        </span>
      </div>
    );
  }
};
export default Comments;
