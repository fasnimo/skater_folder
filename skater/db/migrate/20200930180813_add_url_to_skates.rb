class AddUrlToSkates < ActiveRecord::Migration[6.0]
  def change
    add_column :skates, :url, :string
  end
end
