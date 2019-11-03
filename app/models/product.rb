class Product < ApplicationRecord
  validates :name, presence: true
  validates :description, presence: true
  validates :price, numericality: {
    greater_than_equal_to: 0.0
  }
end
