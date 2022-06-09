# Locations and Companies Lab/HW

This lab is also homework

## Basic

Build brand new django projects for the following.  **Note:** these are self-contained projects, not just apps within the `django_rest_api` project we built today:

- companies (model should have name and industry properties)
- locations (model should have street, city, and state properties)

This should be done similarly to how we created people in our lecture.

## Hungry for More

Do either or both of these:

- Try rebuilding the locations and companies projects, but make them apps within the original `django_rest_api` project that we created today
- Build a front-end to interact with this api using either jquery or react
	- This can be done just by creating HTML/CSS/JS files and opening them in your browser like in unit 1, or as a stretch you can research [Create React App](https://github.com/facebook/create-react-app)

## Super Duper Hungry for More

Reseach Many-to-One relationships in Django and try to make it so that the people and companies models can have a nested location in the api like so:

```JSON
{
	"id":12,
	"name":"bob",
	"age":42,
	"home": {
		"id":2,
		"street":"123 fake street",
		"city":"funtown",
		"state":"MO"
	}
}
```

or

```JSON
{
	"id":3,
	"name":"apple",
	"industry":"Technology",
	"headquarters": {
		"id":2,
		"street":"123 fake street",
		"city":"funtown",
		"state":"MO"
	}
}
```

## Super Duper DUPER Hungry for More

Go the other way around and make it so that locations can have an array of contacts and/or companies like so:

```JSON
{
	"id":2,
	"street":"123 fake street",
	"city":"funtown",
	"state":"MO",
	"inhabitants":[
		{ "id": 12, "name": "Bob", "age": 42 },
		{ "id": 13, "name": "Sally", "age": 43 }
	],
	"companies":[
		{ "id": 3, "name": "Apple", "industry": "Technology" },
		{ "id": 3, "name": "Google", "industry": "Web" }
	]
}
```

## Ludicrous Speed

Create a many-to-many relationship between contacts and companies, so that a contact can have multiple employers and a company can have multiple employees
