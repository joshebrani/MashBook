# == Schema Information
#
# Table name: posts
#
#  id             :bigint           not null, primary key
#  body           :text
#  post_author_id :integer
#  wall_id        :text
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
class Post < ApplicationRecord

    belongs_to :wall,
        foreign_key: :wall_id,
        class_name: :User


    belongs_to :author,
        foreign_key: :post_author_id,
        class_name: :User
end
