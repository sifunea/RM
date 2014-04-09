Ext.define('RM.model.Employee', {
    extend: 'RM.model.Base',
    fields: [
      {
        name: 'Id',
        type: 'int'
      },
      {
        name: 'EmployeeNumber',
        type: 'int'
      },
      {
          name: 'FirstName',
          type: 'string'
      },
      {
          name: 'MiddleName',
          type: 'string'
      },
      {
          name: 'LastName',
          type: 'string'
      },
      {
          name: 'NationalityId',
          type: 'int'
      },
      {
          name: 'Nationality',
          type: 'string'
      },
      {
          name: 'DateOfBirth',
          type: 'date',
          dateWriteFormat: 'Y-m-d'
      },
      {
          name: 'GenderId',
          type: 'int'
      },
      {
          name: 'Gender',
          type: 'string'
      },
      {
          name: 'MaritalStatusId',
          type: 'int'
      },
      {
          name: 'ssn',
          type: 'int'
      },
      {
          name: 'Nic',
          type: 'int'
      },
      {
          name: 'OtherId',
          type: 'int'
      },
      {
          name: 'DrivingLicenseNo',
          type: 'int'
      },
      {
          name: 'WorkStationId',
          type: 'int'
      },
      {
          name: 'AddressLine1',
          type: 'string'
      },
      {
          name: 'AddressLine2',
          type: 'string'
      },
      {
          name: 'City',
          type: 'string'
      },
      {
          name: 'Country',
          type: 'string'
      },
      {
          name: 'Province',
          type: 'string'
      },
      {
          name: 'Postal',
          type: 'int'
      },
      {
          name: 'HomePhone',
          type: 'int'
      },
      {
          name: 'MobilePhone',
          type: 'int'
      },
      {
          name: 'WorkPhone',
          type: 'int'
      },
      {
          name: 'WorkEmail',
          type: 'string'
      },
      {
          name: 'PrivateEmail',
          type: 'string'
      },
      {
          name: 'JoinedDate',
          type: 'date',
          dateWriteFormat: 'Y-m-d'
      },
      {
          name: 'ConfirmationDate',
          type: 'date',
          dateWriteFormat: 'Y-m-d'
      },
      {
          name: 'Department',
          type: 'string'
      },
      {
          name: 'Supervisor',
          type: 'string'
      }
    ]
});
