class FixColumnName < ActiveRecord::Migration[5.1]
  def change
    rename_column :ideas, :titele, :title
  end
end
