# Generated by Django 4.0.5 on 2022-06-09 20:15

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('companies_api', '0002_rename_age_company_industry'),
    ]

    operations = [
        migrations.RenameField(
            model_name='company',
            old_name='industry',
            new_name='age',
        ),
    ]
