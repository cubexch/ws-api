from setuptools import setup

setup(
    name='cubexch-client',
    version='1.2.0',
    description='cubexch client',
    author='cubexch',
    install_requires=[
        'protobuf',
    ],
    package_data={
        'cube_ws_api': ['py.typed'],
    },
)
