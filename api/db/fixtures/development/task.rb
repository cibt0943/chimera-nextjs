10.times do
  Task.seed do |s|
    s.title = Faker::Book.title
  end
end
