# Generated by Django 4.0.2 on 2022-10-14 16:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profileacc', '0003_alter_useraccount_role'),
    ]

    operations = [
        migrations.AlterField(
            model_name='useraccount',
            name='role',
            field=models.CharField(blank=True, choices=[('Clerk', 'Clerk'), ('Manager', 'Manager')], max_length=100, null=True),
        ),
    ]
