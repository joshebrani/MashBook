class EditPosts < ActiveRecord::Migration[5.2]
  def change
    remove_column :posts, :body
    remove_column :posts, :post_author_id
    remove_column :posts, :wall_id

    add_column :posts, :body, :text, null: false
    add_column :posts, :post_author_id, :integer, null: false
    add_column :posts, :wall_id, :integer, null: false

    add_index :posts, :post_author_id
    add_index :posts, :wall_id
  end
end
