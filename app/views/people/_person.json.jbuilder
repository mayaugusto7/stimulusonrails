json.extract! person, :id, :name, :username, :document, :favcolor, :created_at, :updated_at
json.url person_url(person, format: :json)
