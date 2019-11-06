FactoryBot.define do
  factory :comment do
    body { "MyText" }
    product { "" }
    user { nil }
  end
end
