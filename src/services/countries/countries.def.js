module.exports = {
    description: 'Country',
    definitions: {
        countries: {
            'type': 'object',
            'required': [
                'id',
                'name',
                'timeZone'
            ],
            'properties': {
                'id': {
                    'type': 'string',
                    'format': 'uuid',
                    'description': 'uuid of a Country'
                },
                'name': {
                    'type': 'string',
                    'description': 'The name of a Country'
                },
                'currency': {
                    'type': 'object',
                    'description': 'Currency of a Country',
                    $ref: '#definitions/currencies'
                },
                'timeZone': {
                    'type': 'string',
                    'description': 'Timezone of country'
                },
                'createdAt': {
                    'type': 'string',
                    'format': 'timestamp'
                },
                'updatedAt': {
                    'type': 'string',
                    'format': 'timestamp'
                }
            }
        },
        'countries list': {
            type: 'array',
            items: { $ref: '#/definitions/countries' }
        }
    }
};
