class CreateCoins < ActiveRecord::Migration[5.2]
  def change
    create_table :coins do |t|
      t.string :name
      t.string :symbol
      t.string :ctype
      t.decimal :rate, :precision => 15, :scale => 10

      t.timestamps
    end
  end
end
