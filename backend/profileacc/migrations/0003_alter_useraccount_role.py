# Generated by Django 4.0.2 on 2022-10-14 15:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profileacc', '0002_useraccount_date_joined_useraccount_role_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='useraccount',
            name='role',
            field=models.CharField(blank=True, choices=[('Admin', 'Admin'), ('Manager', 'Manager')], max_length=100),
        ),
    ]