@posts.each do |post|
    json.set! post.id do
        json.comments post.comments
        json.partial! 'api/posts/post', post: post
    end
end