class AddSubjectToReviews < ActiveRecord::Migration[6.0]
  def change
    add_column :reviews, :subject, :string
  end
end
