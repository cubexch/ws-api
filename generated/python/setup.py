from setuptools import setup

setup(
    name='cubexch-client',
    version='1.1.19',
    description='cubexch client',
    author='cubexch',
    install_requires=[
        'protobuf',
    ],
    package_data={
        'cube_ws_api': ['py.typed'],
    },
)
