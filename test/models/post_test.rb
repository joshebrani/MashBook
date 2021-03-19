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
require 'test_helper'

class PostTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
