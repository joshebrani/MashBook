class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.text :body
      t.integer :post_author_id
      t.text :wall_id

      t.timestamps
    end

    add_index :posts, :post_author_id
    add_index :posts, :wall_id
  end
end
