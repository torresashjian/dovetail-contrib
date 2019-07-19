JSON schema for headers and query parameters to render Grid component

```
{
    "type": "array",
    "items": {
        "type": "object",
        "properties": {
            "parameterName": {
                "type": "string"
            },
            "type": {
                "type": { "enum": [ "string", "number", "boolean" ] }
            },
            "repeating": {
                "type": { "enum": [ "true", "false" ] }
            },
            "required": {
                "type": { "enum": [ "true", "false" ] }
            },
        }
    }
}
```

JSON schema for path parameters to render Grid component

```
{
    "type": "array",
    "items": {
        "type": "object",
        "properties": {
            "parameterName": {
                "type": "string"
            },
            "repeating": {
                "type": { "enum": [ "true", "false" ] }
            },
            "required": {
                "type": { "enum": [ "true", "false" ] }
            },
        }
    }
}
```
