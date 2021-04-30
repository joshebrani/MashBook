# json.partial! 'comment', comment: @comment


json.comment do 
    json.extract! @comment, :id, :comment, :post_id, :comment_author_id
    json.author @comment.user.fname + " " + @comment.user.lname
    json.post @comment.post
end