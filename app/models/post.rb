# == Schema Information
#
# Table name: posts
#
#  id             :bigint           not null, primary key
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  body           :text             not null
#  post_author_id :integer          not null
#  wall_id        :integer          not null
#
class Post < ApplicationRecord

    validates :body, :post_author_id, :wall_id, presence: true

    belongs_to :wall,
        foreign_key: :wall_id,
        class_name: :User


    belongs_to :author,
        foreign_key: :post_author_id,
        class_name: :User

    has_many :comments,
        foreign_key: :post_id,
        class_name: :Comment
end
