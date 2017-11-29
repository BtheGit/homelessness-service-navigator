import dataparser from '../../utils/dataparser';
import data from '../../data/Homeless_Services';

describe('dataparser function should parse data to return a workable json object for the frontend', () => {
	const result = dataparser(data);

	it('should return same length as rows in csv', () => {
		expect(result.length).toBe(data.length);
	});

	it('should have the following properties for each element in data array', () => {
		expect(result[0]).toHaveProperty('organizationName', 'Catholic Charities');
		expect(result[0]).toHaveProperty('programName', 'Refugee Center');
		expect(result[0]).toHaveProperty(
			'description',
			'The Refugee Center is a home to welcome refugees and those who have asylum status to Washington, DC. The program helps these families to learn cultural norms about their new community in a safe environment and provides support in finding a job. Our staff understand what it is like to be refugee or asylee — many of them were once refugees themselves!  This allows us to offer services and support that fit the unique experiences of those who had to flee their home and come to the United States.\n In addition to our employment services, we offer refugees referrals for housing, help finding employment and education about the culture and social customs here in America.'
		);
		expect(result[0]).toHaveProperty('website', 'https://www.catholiccharitiesdc.org/refugee/');
		expect(result[0]).toHaveProperty('address', '1018 MONROE STREET, NE, WASHINGTON, DC 20017');
		expect(result[0]).toHaveProperty('services', ['HOUSING_NAVIGATION', 'VOCATIONAL_TRAINING']);
	});
});
