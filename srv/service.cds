using { MyProject as my } from '../db/schema.cds';

@path : '/service/MyProject'
service MyProject
{
    @odata.draft.enabled
    entity Person1 as projection on my.Person
    {
        *
    }
    excluding
    {
        fname
    };
}

annotate MyProject with @requires :
[
    'authenticated-user'
];
