# == Schema Information
#
# Table name: comments
#
#  id                :bigint           not null, primary key
#  comment           :text             not null
#  post_id           :integer          not null
#  comment_author_id :integer          not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#
class Comment < ApplicationRecord
    validates :comment, :post_id, :comment_author_id, presence: true


    belongs_to :user,
        foreign_key: :comment_author_id,
        class_name: :User

    belongs_to :post,
        foreign_key: :post_id,
        class_name: :Post
end
