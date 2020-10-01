class CreateSkates < ActiveRecord::Migration[6.0]
  def change
    create_table :skates do |t|
      t.string :level
      t.string :name

      t.timestamps
    end
  end
end
