from setuptools import setup

setup(
    name='cubexch-client-os-utils',
    version='0.0.1',
    description='cubexch client order service utils',
    author='cubexch',
    install_requires=[
        'cubexch-client',
        'cubexch-client-utils',
    ],
    package_data={
        'cube_ws_api_os': ['py.typed'],
    },
)
