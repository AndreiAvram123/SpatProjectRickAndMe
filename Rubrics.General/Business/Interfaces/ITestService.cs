﻿using Rubrics.General.Business.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Rubrics.General.Business.Interfaces
{
    public interface ITestService
    {
        Task<List<TestModel>> GetStudents();
    }
}
