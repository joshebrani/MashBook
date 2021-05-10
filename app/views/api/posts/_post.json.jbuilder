json.extract! post, :id, :body, :post_author_id, :wall_id, :created_at
if post.photo.attached?
   json.photoUrl url_for(post.photo)
end