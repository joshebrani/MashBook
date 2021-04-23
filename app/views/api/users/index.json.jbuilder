@users.each do |user|
    json.set! user.id do
        json.comments user.comments
        json.posts user.posts
        json.partial! 'api/users/user', user: user
    end
end